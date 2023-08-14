import { component$, useStore, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from './components/header/header';
import { Menu } from './components/menu';
import type { Page } from './entity';
import { repo } from './repository';

export default component$(() => {
  const PAGE_SIZE = 7
  const length = repo.length
  const TOTAL_PAGE = Math.ceil(length / PAGE_SIZE)
  const pageState = useStore<Page>({ cur: 0, menu: repo.slice(0, PAGE_SIZE), curPage: 1, isNextPage: repo.length > PAGE_SIZE, isPrevPage: false })

  const updateHandler = $((prev: boolean = false) => {
    //prev page
    if (prev) {
      pageState.curPage -= 1
      pageState.cur -= PAGE_SIZE
    } else {
      //next page
      pageState.curPage += 1
      pageState.cur += PAGE_SIZE
    }

    if (pageState.cur - PAGE_SIZE >= 0) {
      pageState.isPrevPage = true
    } else {
      pageState.isPrevPage = false
    }
    pageState.menu = repo.slice(pageState.cur, pageState.cur + PAGE_SIZE)
    if (pageState.cur + PAGE_SIZE >= length) {
      pageState.isNextPage = false
    } else {
      pageState.isNextPage = true
    }
  })

  return (
    <>
      <Header />
      <div class="card bg-base-100 rounded-lg shadow-lg px-4 py-4">
        <Menu menu={pageState.menu}></Menu>
        <div class="grid grid-cols-3 gap-4 justify-items-center items-baseline pt-4">
          <button class="btn btn-square btn-outline" onClick$={() => updateHandler(true)} disabled={!pageState.isPrevPage}>
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
          </button>
          <div>
            <p>{`${pageState.curPage} / ${TOTAL_PAGE}`}</p>
          </div>
          <button class="btn btn-square btn-outline" onClick$={() => updateHandler()} disabled={!pageState.isNextPage}>
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
            </svg></button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'N1ll',
  meta: [
    {
      name: 'description',
      content: 'A simple blog',
    },
  ],
};
