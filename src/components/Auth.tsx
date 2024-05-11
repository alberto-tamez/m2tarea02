// components/Auth.js
import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

// shadcn
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error) console.error('Error logging in:', error.message);
        setLoading(false);
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Ingresa tu correo electronico y contraseña para hacer login
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Sign in</Button>
            </CardFooter>
        </Card>

    );
}

export default Auth;
