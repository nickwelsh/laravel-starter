import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { type FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface ResetPasswordForm {
	email: string;
	password: string;
	password_confirmation: string;
	token: string;
}

interface ResetPasswordProps {
	email: string;
	token: string;
}

export default function ResetPassword({ email, token }: ResetPasswordProps) {
	const { data, errors, post, processing, reset, setData } = useForm<Required<ResetPasswordForm>>({
		email: email,
		password: '',
		password_confirmation: '',
		token: token,
	});

	const submit: FormEventHandler = e => {
		e.preventDefault();
		post(route('password.store'), {
			onFinish: () => {
				reset('password', 'password_confirmation');
			},
		});
	};

	return (
		<AuthLayout description='Please enter your new password below' title='Reset password'>
			<Head title='Reset password' />

			<form onSubmit={submit}>
				<div className='grid gap-6'>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							autoComplete='email'
							className='mt-1 block w-full'
							id='email'
							name='email'
							onChange={e => {
								setData('email', e.target.value);
							}}
							readOnly
							type='email'
							value={data.email}
						/>
						<InputError className='mt-2' message={errors.email} />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							autoComplete='new-password'
							autoFocus
							className='mt-1 block w-full'
							id='password'
							name='password'
							onChange={e => {
								setData('password', e.target.value);
							}}
							placeholder='Password'
							type='password'
							value={data.password}
						/>
						<InputError message={errors.password} />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password_confirmation'>Confirm password</Label>
						<Input
							autoComplete='new-password'
							className='mt-1 block w-full'
							id='password_confirmation'
							name='password_confirmation'
							onChange={e => {
								setData('password_confirmation', e.target.value);
							}}
							placeholder='Confirm password'
							type='password'
							value={data.password_confirmation}
						/>
						<InputError className='mt-2' message={errors.password_confirmation} />
					</div>

					<Button className='mt-4 w-full' disabled={processing} type='submit'>
						{processing && <LoaderCircle className='h-4 w-4 animate-spin' />}
						Reset password
					</Button>
				</div>
			</form>
		</AuthLayout>
	);
}
