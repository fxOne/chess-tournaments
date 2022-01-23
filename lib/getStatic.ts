import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';
import i18nextConfig from '../next-i18next.config';

type Paths = Array<string | { params: ParsedUrlQuery; locale?: string }>;

export function getI18nPaths(additionalParameterList: ParsedUrlQuery[] = []): Paths {
  const result: Paths = [];

  for (const lng of i18nextConfig.i18n.locales) {
    if (additionalParameterList.length === 0) {
      result.push({
        params: {
          locale: lng,
        },
      });
    } else {
      for (const additionalParameters of additionalParameterList) {
        result.push({
          params: {
            locale: lng,
            ...additionalParameters,
          },
        });
      }
    }
  }
  return result;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    fallback: false,
    paths: getI18nPaths(),
  };
}
export async function getStaticPathsWithAdditionalParams(
  additionalParameterList: ParsedUrlQuery[],
): Promise<GetStaticPathsResult> {
  return {
    fallback: false,
    paths: getI18nPaths(additionalParameterList),
  };
}

export async function getI18nProps(ctx: GetStaticPropsContext<{ locale: string }>, ns = ['common']) {
  const locale = ctx?.params?.locale || 'en';
  return {
    ...(await serverSideTranslations(locale, ns)),
  };
}

export function makeStaticProps(ns: string[] = []) {
  return async function getStaticProps(ctx: GetStaticPropsContext<{ locale: string }>) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
