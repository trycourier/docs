import React from "react";
import Link from "@docusaurus/Link";
import { applyTrailingSlash } from "@docusaurus/utils-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  useActivePlugin,
  useActiveDocContext,
  useVersions,
  useDocVersionSuggestions,
} from "@theme/hooks/useDocs";
import { ThemeClassNames, useDocsPreferredVersion, useDocsVersion } from "@docusaurus/theme-common";
import DocVersionBanner from "@theme-original/DocVersionBanner";
import Head from "@docusaurus/Head";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import type { Props } from "@theme/DocVersionBanner";
import clsx from "clsx";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";

function DocVersionV1Banner({
  className,
  versionMetadata,
}: Props & {
  versionMetadata: PropVersionMetadata;
}): JSX.Element {
  const { pluginId } = useActivePlugin({ failfast: true })!;
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);
  const { latestVersionSuggestion, latestDocSuggestion } = useDocVersionSuggestions(pluginId);

  const latestVersionSuggestedDoc =
    latestDocSuggestion ??
    latestVersionSuggestion.docs.find((doc) => doc.id === latestVersionSuggestion.mainDocId);

  const context = useDocusaurusContext();
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <>
      {latestDocSuggestion && (
        <Head>
          <link
            rel="canonical"
            href={applyTrailingSlash(
              withBaseUrl(latestDocSuggestion.path, { absolute: true }),
              context.siteConfig
            )}
          />
        </Head>
      )}

      <div
        className={clsx(
          className,
          ThemeClassNames.docs.docVersionBanner,
          "alert alert--warning margin-bottom--md"
        )}
        role="alert"
      >
        <div>
          This is documentation for Courier’s <b>{versionMetadata.label}</b> API.
        </div>
        <div className="margin-top--md">
          For the most up-to-date documentation, see the{" "}
          <Link
            href={latestVersionSuggestedDoc.path}
            onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
          >
            <b>latest version</b>
          </Link>{" "}
          (API {latestVersionSuggestion.label}).
        </div>
      </div>
    </>
  );
}

function DocVersionV2Banner({
  className,
  versionMetadata,
}: Props & {
  versionMetadata: PropVersionMetadata;
}): JSX.Element {
  const { activeDoc } = useActiveDocContext();
  const { pluginId } = useActivePlugin({ failfast: true })!;
  const versions = useVersions(pluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);

  const previousVersion = versions.find((version) => !version.isLast);
  const previousDocSuggestion = previousVersion.docs.find((doc) => doc.id === activeDoc.id);
  const previousVersionSuggestedDoc =
    previousDocSuggestion ??
    previousVersion.docs.find((doc) => doc.id === previousVersion.mainDocId);

  return (<></>
    /*<div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        "alert alert--info margin-bottom--md"
      )}
      role="alert"
    >
      <div>
        This is documentation for Courier’s <b>{versionMetadata.label}</b> API, which we released on
        2/15/22.
      </div>
      <div className="margin-top--md">
        If you implemented the Courier API prior to 2/15/22 you can find Courier’s{" "}
        <b>{previousVersion.label}</b> docs{" "}
        <Link
          href={previousVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(previousVersion.name)}
        >
          here
        </Link>
        .
      </div>
    </div>*/
  );
}

export default function CustomDocVersionBanner({ className }: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return <DocVersionBanner className={className} />;
  }
  if (versionMetadata.isLast) {
    return <DocVersionV2Banner className={className} versionMetadata={versionMetadata} />;
  }
  return <DocVersionV1Banner className={className} versionMetadata={versionMetadata} />;
}
