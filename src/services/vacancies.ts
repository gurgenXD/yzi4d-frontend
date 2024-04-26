export async function getVacancyCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/vacancies`, {
      cache: "no-store",
    });
  
    return response.json();
  }
  