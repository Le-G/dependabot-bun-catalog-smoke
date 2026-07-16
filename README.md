# dependabot-bun-catalog-smoke

Minimal Bun workspaces + Nx-shaped monorepo to test whether **GitHub Dependabot** updates **Bun catalogs**.

## Layout

```
package.json          # workspaces + catalog (intentionally outdated pins)
apps/api              # uses lodash, ms, zod, uuid via catalog:
apps/web              # uses chalk, lodash, zod via catalog:
libs/shared           # uses ms, zod via catalog:
.github/dependabot.yml
```

## Catalog pins (deliberately old)

| Package | Catalog pin | Why outdated |
|---------|-------------|--------------|
| lodash  | 4.17.15     | patch available |
| ms      | 2.0.0       | minor/patch available |
| zod     | 3.22.0      | 3.x and 4.x newer |
| chalk   | 4.1.0       | 4.x and 5.x newer |
| uuid    | 8.3.0       | 9.x / 10.x / 11.x newer |

Root tooling (`nx`, `typescript`) is also intentionally old and **not** in the catalog, so we can compare catalog vs normal root deps.

## What to inspect on Dependabot PRs

1. Does it bump versions **inside** `workspaces.catalog`?
2. Does it leave `"pkg": "catalog:"` alone in app/lib package.jsons?
3. Does it strip/corrupt `catalog` / lockfile fields?
4. Does it only bump non-catalog root `devDependencies`?

## Trigger

After push: **Insights → Dependency graph → Dependabot → Check for updates**
