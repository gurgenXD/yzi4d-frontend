export default function YandexMetrics() {
    return (
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < e.getElementsByTagName(t).length; j++) {if (e.getElementsByTagName(t)[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(95292842, "init", {
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                        trackHash: true
                    });
                `,
            }}
        />
    )
}
