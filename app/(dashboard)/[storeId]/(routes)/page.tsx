import prismadb from "@/lib/prismadb";

const DashboardPage = async ({ params }: { params: { storeId: string } }) => {
  const store = await prismadb.store.findUnique({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
