import UserSocials from "../_components/UserSocials";

export async function generateMetadata({ params }) {
    return {
        title: params.username,
    }
}
export default function Page({ params }) {
    return (
        <div>
            <UserSocials userDataName={params.username} />
        </div>
    )
}