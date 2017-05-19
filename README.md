# CF Blog

This Rails application is an optional module, creating a blog.

## To Do / Bugs

- [x] Add white background to navigation, particularly in fixed mode.
- [x] Add User model.
- [x] Install Devise & CanCanCan.
- [x] Restrict article creation and editing to users only.
- [x] Only show "edit" links to logged in users.

~~- [ ] Show "new" link to all users, redirect users who are not logged in to sign in page.~~
- [x] _Hide new post link to users that aren't logged in._
- [x] Add Comments model.
- [x] Add a form underneath articles to allow readers to add comments. 
- [x] Allow authorised users to delete comments.
- [ ] Validate comments to prevent empty messages.
- [ ] Add pagination for index page.
- [ ] Add pagination for comments on article page.
- [ ] Update views for devise forms.