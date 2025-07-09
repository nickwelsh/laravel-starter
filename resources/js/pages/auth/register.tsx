import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { type FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface RegisterForm {
	email: string;
	name: string;
	password: string;
	password_confirmation: string;
}

export default function Register() {
	const { data, errors, post, processing, reset, setData } = useForm<Required<RegisterForm>>({
		email: '',
		name: '',
		password: '',
		password_confirmation: '',
	});

	const submit: FormEventHandler = e => {
		e.preventDefault();
		post(route('register'), {
			onFinish: () => {
				reset('password', 'password_confirmation');
			},
		});
	};

	return (
		<AuthLayout description='Enter your details below to create your account' title='Create an account'>
			<Head title='Register' />
			<form className='flex flex-col gap-6' onSubmit={submit}>
				<div className='grid gap-6'>
					<div className='grid gap-2'>
						<Label htmlFor='name'>Name</Label>
						<Input
							autoComplete='name'
							autoFocus
							disabled={processing}
							id='name'
							onChange={e => {
								setData('name', e.target.value);
							}}
							placeholder='Full name'
							required
							tabIndex={1}
							type='text'
							value={data.name}
						/>
						<InputError className='mt-2' message={errors.name} />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='email'>Email address</Label>
						<Input
							autoComplete='email'
							disabled={processing}
							id='email'
							onChange={e => {
								setData('email', e.target.value);
							}}
							placeholder='email@example.com'
							required
							tabIndex={2}
							type='email'
							value={data.email}
						/>
						<InputError message={errors.email} />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							autoComplete='new-password'
							disabled={processing}
							id='password'
							onChange={e => {
								setData('password', e.target.value);
							}}
							placeholder='Password'
							required
							tabIndex={3}
							type='password'
							value={data.password}
						/>
						<InputError message={errors.password} />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password_confirmation'>Confirm password</Label>
						<Input
							autoComplete='new-password'
							disabled={processing}
							id='password_confirmation'
							onChange={e => {
								setData('password_confirmation', e.target.value);
							}}
							placeholder='Confirm password'
							required
							tabIndex={4}
							type='password'
							value={data.password_confirmation}
						/>
						<InputError message={errors.password_confirmation} />
					</div>

					<Button className='mt-2 w-full' disabled={processing} tabIndex={5} type='submit'>
						{processing && <LoaderCircle className='h-4 w-4 animate-spin' />}
						Create account
					</Button>
				</div>

				<div className='text-center text-sm text-muted-foreground'>
					Already have an account?{' '}
					<TextLink href={route('login')} tabIndex={6}>
						Log in
					</TextLink>
				</div>
			</form>
		</AuthLayout>
	);
}
