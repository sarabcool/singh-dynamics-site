# Singh Dynamics website

Public sales site for Singh Dynamics.

## Stack

- TanStack Start
- React 19
- TypeScript
- Tailwind CSS
- Vite

## Development

```sh
npm install
npm run dev
```

Before shipping, run the same functional checks as CI:

```sh
npx eslint . --rule 'prettier/prettier: off'
npm run build
```

Formatting cleanup is tracked separately from functional lint/build failures so old Prettier debt does not hide real regressions.

## Website intake

The homepage can submit inbound website requests directly to the Singh Dynamics API Worker.

Set this public build variable on the production site deployment:

```text
VITE_INTAKE_URL=https://<singh-dynamics-worker-host>/intake
```

This value is an endpoint URL, not a secret. The Worker only accepts browser requests from `https://singhdynamics.com` and `https://www.singhdynamics.com`.

If `VITE_INTAKE_URL` is absent, the site keeps the phone and email fallback instead of showing a broken form.

## Deployment

The production site is `https://singhdynamics.com/`. Keep deployment-specific credentials in the hosting platform or GitHub secrets. Do not commit API keys, tokens, or credentials.
