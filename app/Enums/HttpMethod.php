<?php

declare(strict_types=1);

namespace App\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
enum HttpMethod: string
{
    case GET = 'GET';

    case HEAD = 'HEAD';

    case POST = 'POST';

    case PUT = 'PUT';

    case DELETE = 'DELETE';

    case CONNECT = 'CONNECT';

    case OPTIONS = 'OPTIONS';

    case TRACE = 'TRACE';

    case PATCH = 'PATCH';
}
