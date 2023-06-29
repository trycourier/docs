# Redirects Explanation

The vercel.json file in this folder defines redirects for `docs.courier.com`. This means that
these redirects will only apply with the source request points to the `docs` subdomain. It does
not affect the main `courier.com/docs` page.

This file is currently used to redirect the frontend (which uses `docs.courier.com`) to the
correct `courier.com/docs` location. To define redirects that work from the main `www.courier.com`
address, use the `vercel.json` file in the main courier website repo.
