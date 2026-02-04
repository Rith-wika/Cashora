import { useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { policyData } from '@/data/policyData';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PolicyDetail = () => {
    const { id } = useParams<{ id: string }>();
    const policy = policyData.find((p) => p.id === id);

    if (!policy) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-8">
                            <Link to="/#contact">
                                <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Contact
                                </Button>
                            </Link>
                        </div>

                        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 border border-border/50">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                {policy.title}
                            </h1>
                            <div className="h-1 w-20 bg-primary rounded-full mb-8" />

                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                {policy.content}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PolicyDetail;
