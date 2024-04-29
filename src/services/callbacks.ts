export async function createCallback(phone: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/callbacks`, {
        method: "POST",
        body: JSON.stringify({
            phone: phone
        }),
        headers: {
            "Content-type": "application/json",
        },
        cache: "no-store",
    });

    return response;
}
