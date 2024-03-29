import ProfileWrapper from "@/app/profile/components/ProfileWrapper";

export const metadata = {
  title: "Личный кабинет - Поликлиника УЗИ 4Д",
};

export default async function Profile({ params }: { params: { id: string } }) {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container py-md-5 py-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Главная</a>
          </li>
          <li className="breadcrumb-item active">Профиль</li>
        </ol>

        <ProfileWrapper params={params} />
      </div>
    </main>
  );
}
