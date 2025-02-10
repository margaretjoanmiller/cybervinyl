import { cn } from '@/lib/utils';
import { signIn } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async () => {
                            'use server';
                            await signIn('github');
                        }}
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <Button variant="outline" className="w-full">
                                    Login with Github
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{' '}
                            <a
                                href="#"
                                className="underline underline-offset-4"
                            >
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
