<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">SOLOS</h1>
</p>
<p align="center">
    <em>Create your own solos now</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/jaysohagiya54/solos?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/jaysohagiya54/solos?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/jaysohagiya54/solos?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/jaysohagiya54/solos?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running solos](#-running-solos)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

Solos is a versatile and user-friendly blogging platform designed to empower individuals and communities to create, read, and share blogs across various sectors and fields. Whether you're an aspiring writer, a seasoned blogger, or someone looking for insights and information on a wide range of topics, Solos provides the tools and features to enhance your blogging experience. Our mission is to foster a vibrant community of content creators and readers, enabling them to connect, engage, and grow through the power of shared knowledge and stories.

---

##  Features

User-Friendly Blog Creation:

Rich Text Editor: A powerful, intuitive editor with formatting options, media embedding, and markdown support.
Drag-and-Drop Media Uploads: Easily add images, videos, and other media to your blog posts.
Drafts and Autosave: Save drafts and automatically backup your work to avoid losing content.
Content Discovery and Reading:

Category Browsing: Explore blogs categorized by various sectors and fields, such as technology, health, travel, finance, and more.
Search Functionality: Quickly find blogs and topics of interest with an advanced search tool.
Personalized Recommendations: Receive blog suggestions based on your reading history and interests.
Community Engagement:

Commenting and Reactions: Engage with bloggers and readers through comments, likes, and other reactions.
Follow and Subscribe: Follow your favorite bloggers and subscribe to specific topics to stay updated.
User Profiles: Create and customize your profile to showcase your interests and contributions.
Content Management:

Post Scheduling: Schedule blog posts to go live at specific times and dates.
Analytics and Insights: Track the performance of your blogs with detailed analytics on views, engagement, and more.
SEO Tools: Optimize your blog posts for search engines with built-in SEO features.
Customization and Personalization:

Themes and Templates: Choose from a variety of themes and templates to give your blog a unique look.
Custom Domain Support: Use a custom domain name for your blog to enhance your brand identity.
Widgets and Plugins: Enhance your blog with additional functionality through widgets and plugins.
Security and Privacy:

Data Protection: Robust security measures to protect your data and privacy.
User Controls: Manage who can view, comment, and interact with your blog posts.
Content Moderation: Tools to report and moderate inappropriate content.
Monetization Options:

Ad Revenue Sharing: Earn revenue by displaying ads on your blog.
Sponsored Content: Partner with brands for sponsored posts and collaborations.
Membership and Subscriptions: Offer premium content to subscribers for a fee.
Mobile Accessibility:

Responsive Design: A mobile-friendly design ensures a seamless experience across all devices.
Mobile App: Access and manage your blog on the go with the Solos mobile app.
---

##  Repository Structure

```sh
└── solos/
    ├── backend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── prisma
    │   │   ├── migrations
    │   │   │   ├── 20240705052941_init_schema
    │   │   │   │   └── migration.sql
    │   │   │   ├── 20240707020441_new_fields
    │   │   │   │   └── migration.sql
    │   │   │   └── migration_lock.toml
    │   │   └── schema.prisma
    │   ├── src
    │   │   ├── index.ts
    │   │   └── routes
    │   │       ├── blog.ts
    │   │       └── user.ts
    │   └── tsconfig.json
    ├── common
    │   ├── .gitignore
    │   ├── .npmignore
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   └── tsconfig.json
    └── frontend
        ├── .eslintrc.cjs
        ├── .gitignore
        ├── README.md
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── public
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.tsx
        │   ├── assets
        │   │   └── react.svg
        │   ├── components
        │   │   ├── Appbar.tsx
        │   │   ├── Auth.tsx
        │   │   ├── BlogCard.tsx
        │   │   └── Quote.tsx
        │   ├── config.ts
        │   ├── hooks
        │   │   ├── useBlogDetail.tsx
        │   │   └── useBlogs.tsx
        │   ├── index.css
        │   ├── main.tsx
        │   ├── pages
        │   │   ├── BlogFull.tsx
        │   │   ├── Blogs.tsx
        │   │   ├── NewBlog.tsx
        │   │   ├── Signin.tsx
        │   │   └── Signup.tsx
        │   └── vite-env.d.ts
        ├── tailwind.config.js
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vercel.json
        └── vite.config.ts
```

---

##  Modules

<details closed><summary>backend</summary>

| File                                                                                              | Summary                                               |
| ---                                                                                               | ---                                                   |
| [tsconfig.json](https://github.com/jaysohagiya54/solos/blob/master/backend/tsconfig.json)         | HTTP error 401 for prompt `backend/tsconfig.json`     |
| [package.json](https://github.com/jaysohagiya54/solos/blob/master/backend/package.json)           | HTTP error 401 for prompt `backend/package.json`      |
| [package-lock.json](https://github.com/jaysohagiya54/solos/blob/master/backend/package-lock.json) | HTTP error 401 for prompt `backend/package-lock.json` |

</details>

<details closed><summary>backend.src</summary>

| File                                                                                | Summary                                          |
| ---                                                                                 | ---                                              |
| [index.ts](https://github.com/jaysohagiya54/solos/blob/master/backend/src/index.ts) | HTTP error 401 for prompt `backend/src/index.ts` |

</details>

<details closed><summary>backend.src.routes</summary>

| File                                                                                     | Summary                                                |
| ---                                                                                      | ---                                                    |
| [user.ts](https://github.com/jaysohagiya54/solos/blob/master/backend/src/routes/user.ts) | HTTP error 401 for prompt `backend/src/routes/user.ts` |
| [blog.ts](https://github.com/jaysohagiya54/solos/blob/master/backend/src/routes/blog.ts) | HTTP error 401 for prompt `backend/src/routes/blog.ts` |

</details>

<details closed><summary>backend.prisma</summary>

| File                                                                                             | Summary                                                  |
| ---                                                                                              | ---                                                      |
| [schema.prisma](https://github.com/jaysohagiya54/solos/blob/master/backend/prisma/schema.prisma) | HTTP error 401 for prompt `backend/prisma/schema.prisma` |

</details>

<details closed><summary>backend.prisma.migrations</summary>

| File                                                                                                                    | Summary                                                                   |
| ---                                                                                                                     | ---                                                                       |
| [migration_lock.toml](https://github.com/jaysohagiya54/solos/blob/master/backend/prisma/migrations/migration_lock.toml) | HTTP error 401 for prompt `backend/prisma/migrations/migration_lock.toml` |

</details>

<details closed><summary>backend.prisma.migrations.20240707020441_new_fields</summary>

| File                                                                                                                                  | Summary                                                                                       |
| ---                                                                                                                                   | ---                                                                                           |
| [migration.sql](https://github.com/jaysohagiya54/solos/blob/master/backend/prisma/migrations/20240707020441_new_fields/migration.sql) | HTTP error 401 for prompt `backend/prisma/migrations/20240707020441_new_fields/migration.sql` |

</details>

<details closed><summary>backend.prisma.migrations.20240705052941_init_schema</summary>

| File                                                                                                                                   | Summary                                                                                        |
| ---                                                                                                                                    | ---                                                                                            |
| [migration.sql](https://github.com/jaysohagiya54/solos/blob/master/backend/prisma/migrations/20240705052941_init_schema/migration.sql) | HTTP error 401 for prompt `backend/prisma/migrations/20240705052941_init_schema/migration.sql` |

</details>

<details closed><summary>frontend</summary>

| File                                                                                                 | Summary                                                 |
| ---                                                                                                  | ---                                                     |
| [tsconfig.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/tsconfig.json)           | HTTP error 401 for prompt `frontend/tsconfig.json`      |
| [index.html](https://github.com/jaysohagiya54/solos/blob/master/frontend/index.html)                 | HTTP error 401 for prompt `frontend/index.html`         |
| [postcss.config.js](https://github.com/jaysohagiya54/solos/blob/master/frontend/postcss.config.js)   | HTTP error 401 for prompt `frontend/postcss.config.js`  |
| [tsconfig.app.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/tsconfig.app.json)   | HTTP error 401 for prompt `frontend/tsconfig.app.json`  |
| [vite.config.ts](https://github.com/jaysohagiya54/solos/blob/master/frontend/vite.config.ts)         | HTTP error 401 for prompt `frontend/vite.config.ts`     |
| [package.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/package.json)             | HTTP error 401 for prompt `frontend/package.json`       |
| [.eslintrc.cjs](https://github.com/jaysohagiya54/solos/blob/master/frontend/.eslintrc.cjs)           | HTTP error 401 for prompt `frontend/.eslintrc.cjs`      |
| [tsconfig.node.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/tsconfig.node.json) | HTTP error 401 for prompt `frontend/tsconfig.node.json` |
| [tailwind.config.js](https://github.com/jaysohagiya54/solos/blob/master/frontend/tailwind.config.js) | HTTP error 401 for prompt `frontend/tailwind.config.js` |
| [package-lock.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/package-lock.json)   | HTTP error 401 for prompt `frontend/package-lock.json`  |
| [vercel.json](https://github.com/jaysohagiya54/solos/blob/master/frontend/vercel.json)               | HTTP error 401 for prompt `frontend/vercel.json`        |

</details>

<details closed><summary>frontend.src</summary>

| File                                                                                           | Summary                                                |
| ---                                                                                            | ---                                                    |
| [main.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/main.tsx)           | HTTP error 401 for prompt `frontend/src/main.tsx`      |
| [vite-env.d.ts](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/vite-env.d.ts) | HTTP error 401 for prompt `frontend/src/vite-env.d.ts` |
| [config.ts](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/config.ts)         | HTTP error 401 for prompt `frontend/src/config.ts`     |
| [App.css](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/App.css)             | HTTP error 401 for prompt `frontend/src/App.css`       |
| [App.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/App.tsx)             | HTTP error 401 for prompt `frontend/src/App.tsx`       |
| [index.css](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/index.css)         | HTTP error 401 for prompt `frontend/src/index.css`     |

</details>

<details closed><summary>frontend.src.pages</summary>

| File                                                                                               | Summary                                                     |
| ---                                                                                                | ---                                                         |
| [Signin.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/pages/Signin.tsx)     | HTTP error 401 for prompt `frontend/src/pages/Signin.tsx`   |
| [Signup.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/pages/Signup.tsx)     | HTTP error 401 for prompt `frontend/src/pages/Signup.tsx`   |
| [NewBlog.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/pages/NewBlog.tsx)   | HTTP error 401 for prompt `frontend/src/pages/NewBlog.tsx`  |
| [Blogs.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/pages/Blogs.tsx)       | HTTP error 401 for prompt `frontend/src/pages/Blogs.tsx`    |
| [BlogFull.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/pages/BlogFull.tsx) | HTTP error 401 for prompt `frontend/src/pages/BlogFull.tsx` |

</details>

<details closed><summary>frontend.src.components</summary>

| File                                                                                                    | Summary                                                          |
| ---                                                                                                     | ---                                                              |
| [Appbar.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/components/Appbar.tsx)     | HTTP error 401 for prompt `frontend/src/components/Appbar.tsx`   |
| [Quote.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/components/Quote.tsx)       | HTTP error 401 for prompt `frontend/src/components/Quote.tsx`    |
| [BlogCard.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/components/BlogCard.tsx) | HTTP error 401 for prompt `frontend/src/components/BlogCard.tsx` |
| [Auth.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/components/Auth.tsx)         | HTTP error 401 for prompt `frontend/src/components/Auth.tsx`     |

</details>

<details closed><summary>frontend.src.hooks</summary>

| File                                                                                                         | Summary                                                          |
| ---                                                                                                          | ---                                                              |
| [useBlogDetail.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/hooks/useBlogDetail.tsx) | HTTP error 401 for prompt `frontend/src/hooks/useBlogDetail.tsx` |
| [useBlogs.tsx](https://github.com/jaysohagiya54/solos/blob/master/frontend/src/hooks/useBlogs.tsx)           | HTTP error 401 for prompt `frontend/src/hooks/useBlogs.tsx`      |

</details>

<details closed><summary>common</summary>

| File                                                                                             | Summary                                              |
| ---                                                                                              | ---                                                  |
| [tsconfig.json](https://github.com/jaysohagiya54/solos/blob/master/common/tsconfig.json)         | HTTP error 401 for prompt `common/tsconfig.json`     |
| [package.json](https://github.com/jaysohagiya54/solos/blob/master/common/package.json)           | HTTP error 401 for prompt `common/package.json`      |
| [package-lock.json](https://github.com/jaysohagiya54/solos/blob/master/common/package-lock.json) | HTTP error 401 for prompt `common/package-lock.json` |

</details>

<details closed><summary>common.src</summary>

| File                                                                               | Summary                                         |
| ---                                                                                | ---                                             |
| [index.ts](https://github.com/jaysohagiya54/solos/blob/master/common/src/index.ts) | HTTP error 401 for prompt `common/src/index.ts` |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

###  Installation

1. Clone the solos repository:

```sh
git clone https://github.com/jaysohagiya54/solos
```

2. Change to the project directory:

```sh
cd solos
```

3. Install the dependencies:

```sh
npm install
```

###  Running solos

Use the following command to run solos:

```sh
npm run build && node dist/main.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/jaysohagiya54/solos/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/jaysohagiya54/solos/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/jaysohagiya54/solos/issues)**: Submit bugs found or log feature requests for Solos.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/jaysohagiya54/solos
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
