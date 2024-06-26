"use client";

import { getClaims } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth";

export default function OffCanvasProfile({ accessToken }: { accessToken: string | undefined }) {
  const claims = getClaims(accessToken);
  const userId = claims?.user_id;
  const userName = claims?.user_name;
  const router = useRouter();

  return (
    <ul className="nav">
      {accessToken ? (
        <>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href={`/profile/${userId}?category=info`}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14">
                  <path d="M5.5,7c2.02,0,3.67-1.57,3.67-3.5S7.52,0,5.5,0,1.83,1.57,1.83,3.5s1.64,3.5,3.67,3.5Zm0-5.83c1.35,0,2.44,1.04,2.44,2.33s-1.1,2.33-2.44,2.33-2.44-1.04-2.44-2.33,1.1-2.33,2.44-2.33Zm0,7c-3.04,0-5.5,2.35-5.5,5.25,0,.32,.27,.58,.61,.58s.61-.26,.61-.58c0-2.26,1.92-4.08,4.28-4.08s4.28,1.83,4.28,4.08c0,.32,.28,.58,.61,.58s.61-.26,.61-.58c0-2.9-2.46-5.25-5.5-5.25Z" />
                </svg>
              </span>

              <span className="text-truncate">{userName}</span>
            </a>
          </li>

          {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M11.08,1.17h-.58V.58c0-.32-.26-.58-.58-.58s-.58,.26-.58,.58v.58H4.67V.58c0-.32-.26-.58-.58-.58s-.58,.26-.58,.58v.58h-.58c-1.61,0-2.92,1.31-2.92,2.92v7c0,1.61,1.31,2.92,2.92,2.92h2.33c.32,0,.58-.26,.58-.58s-.26-.58-.58-.58H2.92c-.96,0-1.75-.79-1.75-1.75V5.83H13.42c.32,0,.58-.26,.58-.58v-1.17c0-1.61-1.31-2.92-2.92-2.92h0Zm1.75,3.5H1.17v-.58c0-.96,.79-1.75,1.75-1.75H11.08c.96,0,1.75,.79,1.75,1.75v.58Zm-1.82,2.85l-3.33,3.33c-.44,.44-.68,1.03-.68,1.65v.93c0,.32,.26,.58,.58,.58h.93c.62,0,1.21-.24,1.65-.68l3.33-3.33c.33-.33,.51-.77,.51-1.24s-.18-.91-.51-1.24c-.66-.66-1.81-.66-2.48,0h0Zm1.65,1.65l-3.33,3.33c-.22,.22-.51,.34-.82,.34h-.34v-.34c0-.31,.12-.6,.34-.82l3.33-3.33c.22-.22,.6-.22,.82,0,.11,.11,.17,.26,.17,.41s-.06,.3-.17,.41h0Zm-9.75-1c0-.32,.26-.58,.58-.58H7.58c.32,0,.58,.26,.58,.58s-.26,.58-.58,.58H3.5c-.32,0-.58-.26-.58-.58h0Zm3.5,2.33c0,.32-.26,.58-.58,.58H3.5c-.32,0-.58-.26-.58-.58s.26-.58,.58-.58h2.33c.32,0,.58,.26,.58,.58Z" />
                      </svg>
                    </span>
                    Записаться
                  </a>
                </li> */}

          <li className="nav-item">
            <a className="nav-link" href={`/profile/${userId}?category=visits`}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512,192c.15-35.35-28.39-64.12-63.73-64.26s-64.12,28.39-64.26,63.73c-.11,27.22,17,51.53,42.67,60.6v89.26c0,70.69-57.31,128-128,128s-128-57.31-128-128v-1.71c73.38-10.65,127.86-73.48,128-147.63V106.67C298.6,47.79,250.88,.07,192,0c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33c35.35,0,64,28.65,64,64v85.33c0,58.91-47.76,106.67-106.67,106.67s-106.67-47.76-106.67-106.67V106.67c0-35.35,28.65-64,64-64,11.78,0,21.33-9.55,21.33-21.33S118.45,0,106.67,0C47.79,.07,.07,47.79,0,106.67v85.33c.14,74.15,54.62,136.98,128,147.63v1.71c0,94.26,76.41,170.67,170.67,170.67s170.67-76.41,170.67-170.67v-89.26c25.48-9.01,42.55-33.05,42.67-60.07Z" />
                </svg>
              </span>
              Посещения
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href={`/profile/${userId}?category=analyzes`}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.67 512">
                  <path d="M277.33,0H21.33C9.55,0,0,9.55,0,21.33s9.55,21.33,21.33,21.33h21.33V405.33c0,58.91,47.76,106.67,106.67,106.67s106.67-47.76,106.67-106.67V42.67h21.33c11.78,0,21.33-9.55,21.33-21.33S289.12,0,277.33,0ZM149.33,469.33c-35.35,0-64-28.65-64-64V192H213.33v213.33c0,35.35-28.65,64-64,64ZM213.33,149.33H85.33V42.67H213.33v106.67Z" />
                </svg>
              </span>
              Анализы
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href={`/profile/${userId}?category=settings`}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.79 512">
                  <path d="M159.9,512C71.53,511.94-.06,440.26,0,351.9c.05-71.56,47.6-134.39,116.46-153.86,27.01-7.73,55.6-8.09,82.79-1.02L367.96,28.35C386.05,10.14,410.68-.07,436.36,0h0c41.65,.04,75.4,33.79,75.43,75.43,.07,25.67-10.13,50.31-28.33,68.42l-14.34,14.34c-8.02,7.97-18.86,12.45-30.17,12.48h-33.83v21.33c0,23.56-19.1,42.67-42.67,42.67h-21.33v33.83c.03,11.32-4.47,22.18-12.5,30.17l-13.87,13.87c7.1,27.18,6.76,55.77-1,82.77-17.86,62.93-72.1,108.74-137.13,115.82-5.56,.58-11.14,.87-16.73,.87Zm0-277.33c-64.8-.06-117.38,52.42-117.45,117.22-.06,64.8,52.42,117.38,117.22,117.45,52.6,.05,98.81-34.91,113.06-85.55,6.66-23.11,5.91-47.73-2.13-70.4-2.68-7.72-.71-16.3,5.08-22.08l22.78-22.81v-33.83c0-23.56,19.1-42.67,42.67-42.67h21.33v-21.33c0-23.56,19.1-42.67,42.67-42.67h33.83l14.34-14.34c10.17-10.12,15.87-23.88,15.83-38.23-.01-18.08-14.66-32.74-32.75-32.77-14.36-.04-28.13,5.67-38.25,15.85L220.4,236.22c-5.79,5.78-14.37,7.75-22.1,5.06-12.37-4.36-25.39-6.59-38.51-6.61h.11Zm-53.44,149.33c0,11.78,9.55,21.33,21.33,21.33s21.33-9.55,21.33-21.33-9.55-21.33-21.33-21.33-21.33,9.55-21.33,21.33Z" />
                </svg>
              </span>
              Сменить пароль
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              onClick={async () => {
                await logout(userId);
                router.push("/login");
                router.refresh();
              }}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.92 512">
                  <path d="M487.02,195.67l-82.75-82.75c-8.48-8.18-21.98-7.95-30.17,.53-7.98,8.27-7.98,21.37,0,29.64l82.75,82.75c2.46,2.51,4.61,5.3,6.4,8.32-.32,0-.58-.17-.9-.17h0l-334.59,.68c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h0l334.46-.68c.6,0,1.09-.3,1.66-.34-1.89,3.61-4.29,6.93-7.12,9.86l-82.75,82.75c-8.48,8.18-8.71,21.69-.52,30.17s21.69,8.71,30.17,.52c.18-.17,.35-.35,.52-.52l82.75-82.75c33.31-33.32,33.31-87.34,0-120.66h.09Z" />
                  <path d="M149.33,469.33h-42.67c-35.35,0-64-28.65-64-64V106.67c0-35.35,28.65-64,64-64h42.67c11.78,0,21.33-9.55,21.33-21.33S161.12,0,149.33,0h-42.67C47.79,.07,.07,47.79,0,106.67V405.33c.07,58.88,47.79,106.6,106.67,106.67h42.67c11.78,0,21.33-9.55,21.33-21.33,0-11.78-9.55-21.33-21.33-21.33Z" />
                </svg>
              </span>
              Выход
            </a>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14">
                <path d="M5.5,7c2.02,0,3.67-1.57,3.67-3.5S7.52,0,5.5,0,1.83,1.57,1.83,3.5s1.64,3.5,3.67,3.5Zm0-5.83c1.35,0,2.44,1.04,2.44,2.33s-1.1,2.33-2.44,2.33-2.44-1.04-2.44-2.33,1.1-2.33,2.44-2.33Zm0,7c-3.04,0-5.5,2.35-5.5,5.25,0,.32,.27,.58,.61,.58s.61-.26,.61-.58c0-2.26,1.92-4.08,4.28-4.08s4.28,1.83,4.28,4.08c0,.32,.28,.58,.61,.58s.61-.26,.61-.58c0-2.9-2.46-5.25-5.5-5.25Z" />
              </svg>
            </span>
            Личный кабинет
          </a>
        </li>
      )}
    </ul>
  );
}
