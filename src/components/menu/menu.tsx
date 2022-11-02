import { component$ } from '@builder.io/qwik';
import { useContent, Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {

  const { menu } = useContent();
  const loc = useLocation();

  return (
    <aside >
      {menu
        ? menu.items?.map((item) => (
          <>
            <h5>{item.text}</h5>
            <ul>
              {item.items?.map((item) => (
                <li>
                  <Link
                    href={item.href}
                    class={{
                      'is-active': loc.pathname === item.href,
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))
        : null}
    </aside>
  );
});
