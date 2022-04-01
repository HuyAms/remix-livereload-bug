# Remix hot reload bug

I init this project with `npx create-remix@latest` and choose Netlify as the hosting option. 

I try to update the h1 text with my VSCode. I expect the hot reload would work but it doesn't.

To run the project

```
npm install
npm run dev
```

You may need to try to edit the text few times to reproduce the hot-reload bug.

We would see the bug when it stops working and this error appears.

```
/usr/local/lib/node_modules/netlify-cli/node_modules/netlify-redirector/lib/redirects.js:116
      throw ex;
      ^

TypeError: Cannot read properties of undefined (reading 'objectMode')
    at DestroyableTransform.Writable.write (/Users/ht/Desktop/remix-hotreload-bug/node_modules/readable-stream/lib/_stream_writable.js:317:22)
    at PassThrough.ondata (node:internal/streams/readable:777:22)
    at PassThrough.emit (node:events:390:28)
    at PassThrough.emit (node:domain:475:12)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at PassThrough.Readable.push (node:internal/streams/readable:234:10)
    at node:internal/streams/transform:192:12
    at PassThrough._transform (node:internal/streams/passthrough:46:3)
    at PassThrough.Transform._write (node:internal/streams/transform:184:23)
```
