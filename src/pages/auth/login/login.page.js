import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginFailure, loginStart, loginSuccess } from '../../../store/slices';

import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

import { usePocketBase } from '../../../providers/pocketBase.provider';

const RegisterPage = () => {
    const pb = usePocketBase();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: 'test@example.com',
        password: '12345678',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const enterCredentials = async () => {
        dispatch(loginStart());
        try {
            const authData = await pb
                .collection('users')
                .authWithPassword(formData.email, formData.password);
            dispatch(loginSuccess(authData.record));

            navigate('/');
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Sign In for Acme Inc
                        </h2>
                        <p className="mt-4">
                            Create an account to access all of our powerful
                            features.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div>
                                <Label
                                    className="block text-sm font-medium "
                                    htmlFor="email"
                                >
                                    Email address
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        autoComplete="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        id="email"
                                        name="email"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label
                                    className="block text-sm font-medium "
                                    htmlFor="password"
                                >
                                    Password
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        id="password"
                                        name="password"
                                        required
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    className="w-full"
                                    onClick={() => enterCredentials()}
                                >
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
