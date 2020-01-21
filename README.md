### Quickstart
To start `bitbook` - the distributed social network.
Start Frontend -- `yarn run start`
Start tracker -- `yarn run server`
Start websockets -- `yarn run ws`

### Bitbook Concepts
Distributed Hash Table Social Media Platform.
Using WebTorrent.
All posts are torrent files.*
All posts are crytpographically signed.*
Use tracker for global search.*
Groups of users will have a different, rotating PSK (Pre Shared Key). AES Encryption + Cryptographic signing*
Storage is stored per-group. Individual storage can set to expire / keep forever / etc.*
PSK can be rotated when:*
    - A user joins*
    - A certain amount of time passes (if max(post.createdDate) > THRESHOLD) don't rotate. Obviously.*
    - A group is deleted.*
The Group Creator is ultimately in control can add but never be removed.*
Actions / messages cryptographically signed / verified.*

Facebook Intigration
Provide a stream of FB posts from friends using the API.*
Users can make posts directly from the app. Default would be FB / App mixup if you enable the API.*
Distinct difference between FB (INSECURE) AND App posts.*