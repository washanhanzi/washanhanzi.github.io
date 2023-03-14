import { component$, useStore, useStylesScoped$, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GithubIcon, Menu } from './component';
import { Page } from './entity';
import { repo } from './repository';
import style from "./style/arrow.scss?inline"

export default component$(() => {
  useStylesScoped$(style)

  const PAGE_SIZE = 7
  const length = repo.length
  const TOTAL_PAGE = Math.ceil(length / PAGE_SIZE)
  const pageState = useStore<Page>({ cur: 0, menu: [], curPage: 1, isNextPage: true, isPrevPage: false })


  useTask$(({ track }) => {
    track(() => pageState.cur)
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
      <div class="px-6">
        <p class="text-4xl py-4">N1ll</p>
        <a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
          <GithubIcon />
        </a>
        <p class="py-4">Garbberish</p>

        <Menu menu={pageState.menu}></Menu>

        <div class="flex flex-row items-center pt-7">
          <button class={`arrow flex-1 ${pageState.isPrevPage && "arrow--active"}`} onClick$={() => {
            if (!pageState.isPrevPage) {
              return
            }
            pageState.curPage -= 1
            pageState.cur -= PAGE_SIZE
          }}>
            <svg class="relative inset-x-1/2" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
              </g>
            </svg>
          </button>
          <p class="text-center flex-1">{`PAGE: ${pageState.curPage} / ${TOTAL_PAGE}`}</p>
          <button class={`arrow flex-1 ${pageState.isNextPage && "arrow--active"}`} onClick$={() => {
            if (!pageState.isNextPage) {
              return
            }
            pageState.curPage += 1
            pageState.cur += PAGE_SIZE
          }}>
            <svg class="relative inset-x-1/2" width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'N1ll',
};
