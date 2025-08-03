import UserSocials from "../_components/UserSocials";

export async function generateMetadata({ params }) {
  const param = await params;
  return {
    title: param.username,
  };
}
export default async function Page({ params }) {
  const param = await params;
  return (
    <div>
      <UserSocials userDataName={param.username} />
    </div>
  );
}
