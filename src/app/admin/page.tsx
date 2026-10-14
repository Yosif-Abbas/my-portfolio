import AdminForm from '@/components/admin/AdminForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
};

export default async function Admin() {
  return (
    <div className="page-container">
      <div className="container">
        <h2 className="container-h2">Admin</h2>
        <AdminForm />
      </div>
    </div>
  );
}
