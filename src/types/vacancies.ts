export type Vacancy = {
  name: string;
};

export type VacancyCategory = {
  name: string;
  vacancies: Array<Vacancy>;
};
