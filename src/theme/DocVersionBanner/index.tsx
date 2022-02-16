import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import { useActivePlugin, useActiveDocContext, useVersions } from "@theme/hooks/useDocs";
import { ThemeClassNames, useDocsPreferredVersion, useDocsVersion } from "@docusaurus/theme-common";
import DocVersionBanner from "@theme-original/DocVersionBanner";

import type { Props } from "@theme/DocVersionBanner";
import clsx from "clsx";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";

function DocVersionV2Banner({
  className,
  versionMetadata,
}: Props & {
  versionMetadata: PropVersionMetadata;
}): JSX.Element {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { activeDoc } = useActiveDocContext();
  const { pluginId } = useActivePlugin({ failfast: true })!;
  const versions = useVersions(pluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);

  const previousVersion = versions.find((version) => !version.isLast);
  const previousDocSuggestion = previousVersion.docs.find((doc) => doc.id === activeDoc.id);
  const previousVersionSuggestedDoc =
    previousDocSuggestion ??
    previousVersion.docs.find((doc) => doc.id === previousVersion.mainDocId);

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        "alert alert--warning margin-bottom--md"
      )}
      role="alert"
    >
      <div>
        This is documentation for {siteTitle} <b>{versionMetadata.label}</b>, which is shipped on
        2/15/22.
      </div>
      <div className="margin-top--md">
        If you implemented the Courier API prior to 2/15/22 you can find {siteTitle} <b>1.0.0</b>{" "}
        <Link
          href={previousVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(previousVersion.name)}
        >
          here
        </Link>
        .
      </div>
    </div>
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
  return null;
}
