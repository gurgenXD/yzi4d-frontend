import ContactsBlock from "@/app/components/ContactsBlock"

export const metadata = {
    title: "Контакты - Поликлиника Узи4Д",
};


export default function Contacts() {
    return (
        <main role="main" className="flex-shrink-0">
            <div className="overflow-hidden">
                <div className="container pt-4 pt-lg-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Главная</a></li>
                        <li className="breadcrumb-item active">Наши филиалы</li>
                    </ol>

                    <h1 className="mb-4">Наши филиалы</h1>

                    <ContactsBlock />

                </div>
            </div>
        </main>
    )
}
