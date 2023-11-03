# Reproduction

Only works in production (start) mode, not in dev

1. `pnpm install`
2. `pnpm run build`
3. `pnpm run start`
4. Got to [index page /](http://localhost:3000)
5. Click checkbox - page should flicker and reset to default value
6. Click it again - should work as expected
7. Move cursor over any link in grid - it should reset again

To "fix" it go to `./app/Wrapper.tsx`, at line 33 change `prefetch={true}` to `prefetch={false}` 
