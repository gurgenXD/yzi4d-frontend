import ProfileWrapper from "@/app/components/profile/ProfileWrapper";

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

        <h1 className="mb-4">Личный кабинет</h1>

        <ProfileWrapper params={params} />
      </div>
    </main>
  );
}