import { cn } from '@/lib/utils';
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

import { auth } from '@/lib/auth';

const login = async (formData) => {
    'use server';
    try {
        if (formData.get('password') !== formData.get('confirm')) {
            throw new Error('Passwords do not match');
        }
        await auth.api.signUpEmail({
            body: {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
            },
        });
    } catch (error) {
        console.error(error);
    }
};

export function RegistrationForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={login}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Name or nickname</Label>
                                <Input
                                    name="name"
                                    type="name"
                                    placeholder="Doc Emmet Brown"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    name="password"
                                    type="password"
                                    required
                                />
                                <div className="flex items-center">
                                    <Label htmlFor="password">
                                        Confirm password
                                    </Label>
                                </div>
                                <Input
                                    name="confirm"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    Sign up
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
