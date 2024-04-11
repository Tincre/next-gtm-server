# next-gtm-server, by [Tincre](https://tincre.com/)

This is the GTM portion from the `@next/third-parties`, a collection of components and utilities that can be used to efficiently load third-party libraries into your Next.js applications.

> Note: `@next/third-parties` is still experimental and under active development.

This version of `GoogleTagManager` allows for custom urls to be set for server-side Google Tag Manager deployments.

## License

This code is under the MIT license. 

You will see various headers throughout the codebase and can reference the license
directly via [LICENSE](/LICENSE) herein.

### Releases

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to publish.

Currently, only [@thinkjrs](https://github.com/thinkjrs) has the ability to release.

#### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices.

> Ensure that tests :white_check_mark: pass during this process prior to
> releasing via npm.

##### Test release

To do a proper release, ensure you're in the base repo directory and run
`npm publish . --access public --dry-run`.

#### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`.

🎉 That's it! 🎉
