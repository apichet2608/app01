
# 📘 Routing Documentation (React + `react-router-dom` )

## 🧭 Overview

โครงสร้างนี้ใช้ `react-router-dom` เพื่อจัดการเส้นทาง (routing) ในแอป React และแยก layout หลัก (`Layout`) ออกจากหน้าเนื้อหา เช่น `/app` และ `/dashboard` เพื่อให้สามารถแสดงส่วนที่ใช้ร่วมกัน เช่น `Appbar` ได้อย่างสะดวก

---

## 📂 Project Structure (สรุปที่เกี่ยวข้อง)

<pre class="overflow-visible!" data-start="519" data-end="823"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">css</div><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>src</span><span>/
├── App</span><span>.jsx</span><span>                  ← จุดเริ่มต้นของ routing
├── layout</span><span>.jsx</span><span>               ← Layout หลักของระบบ
├── pages/
│   ├── Home/
│   │   └── </span><span>main</span><span>/page</span><span>.jsx</span><span>    ← หน้า Home
│   └── Dashboard/
│       └── </span><span>main</span><span>/page</span><span>.jsx</span><span>    ← หน้า Dashboard
└── Components/
    └── Appbar</span><span>.jsx</span><span>           ← แถบด้านบน
</span></span></code></div></div></pre>

---

## 🧱 Components Explained

### 1. **App.jsx**

ไฟล์หลักที่ตั้งค่า routing โดยใช้ `<BrowserRouter>`, `<Routes>`, และ `<Route>`

<pre class="overflow-visible!" data-start="958" data-end="1295"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">jsx</div><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-jsx"><span><span><</span><span>BrowserRouter</span><span>>
  </span><span><span class="language-xml"><Routes</span></span><span>>
    </span><span><Route</span><span></span><span>path</span><span>=</span><span>"/"</span><span></span><span>element</span><span>=</span><span>{</span><span><</span><span>Layout</span><span> />}>
      </span><span><Route</span><span></span><span>index</span><span></span><span>element</span><span>=</span><span>{</span><span><</span><span>Navigate</span><span></span><span>to</span><span>=</span><span>"/app"</span><span></span><span>replace</span><span> />} />
      </span><span><Route</span><span></span><span>path</span><span>=</span><span>"/app"</span><span></span><span>element</span><span>=</span><span>{</span><span><</span><span>Home</span><span> />} />
      </span><span><Route</span><span></span><span>path</span><span>=</span><span>"/dashboard"</span><span></span><span>element</span><span>=</span><span>{</span><span><</span><span>Dashboard</span><span> />} />
      </span><span><Route</span><span></span><span>path</span><span>=</span><span>"*"</span><span></span><span>element</span><span>=</span><span>{</span><span><</span><span>NotFound</span><span> />} />
    </span><span></Route</span><span>>
  </span><span></Routes</span><span>>
</</span><span>BrowserRouter</span><span>>
</span></span></code></div></div></pre>

#### 📌 อธิบาย:

* `path="/" element={<Layout />}`:
  * เส้นทางหลัก (root) ใช้ Layout ซึ่งรวม `Appbar` และ `Outlet` สำหรับเนื้อหา
* `index` + `<Navigate to="/app" replace />`:
  * ถ้าผู้ใช้เข้าที่ `/` โดยตรง จะถูก redirect ไปที่ `/app`
* `path="/app"` และ `path="/dashboard"`:
  * แสดงหน้า `<Home />` และ `<Dashboard />` ตามลำดับ
* `path="*"`:
  * แสดงหน้า 404 (`<NotFound />`) ถ้าไม่ตรงกับ route ใดเลย

---

### 2. **Layout.jsx**

<pre class="overflow-visible!" data-start="1728" data-end="1885"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">jsx</div><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-jsx"><span><span>export</span><span></span><span>default</span><span></span><span>function</span><span></span><span>Layout</span><span>(</span><span></span><span>) {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"flex flex-col min-h-screen"</span><span>>
      </span><span><Appbar</span><span> />
      </span><span><Outlet</span><span> />
    </span><span></div</span><span>>
  );
}
</span></span></code></div></div></pre>

#### 📌 อธิบาย:

* `Appbar` คือแถบนำทางที่ใช้ร่วมกันทุกหน้า
* `Outlet` คือจุดที่เนื้อหาของแต่ละ Route จะถูกแสดง

---

### 3. **NotFound.jsx (ภายใน App.jsx)**

<pre class="overflow-visible!" data-start="2045" data-end="2404"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">jsx</div><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-jsx"><span><span>const</span><span></span><span>NotFound</span><span> = (</span><span></span><span>) => (
  </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"flex flex-col items-center justify-center min-h-screen"</span><span>>
    </span><span><h1</span><span></span><span>className</span><span>=</span><span>"text-6xl font-bold text-gray-800"</span><span>>404</span><span></h1</span><span>>
    </span><span><h2</span><span></span><span>className</span><span>=</span><span>"text-3xl font-bold text-gray-600 mt-4"</span><span>>Page Not Found</span><span></h2</span><span>>
    </span><span><p</span><span></span><span>className</span><span>=</span><span>"text-gray-500 mt-2"</span><span>>
      The page you're looking for doesn't exist.
    </span><span></p</span><span>>
  </span><span></div</span><span>>
);
</span></span></code></div></div></pre>

#### 📌 อธิบาย:

* แสดงผลหน้าที่ผู้ใช้เข้าผิด URL
* ใช้ Tailwind CSS เพื่อจัด layout กลางหน้าจออย่างสวยงาม

---

## ✅ การใช้งาน (Usage Summary)

| URL Path            | Component ที่แสดง | Layout |
| ------------------- | ------------------------ | ------ |
| `/`               | Redirect →`/app`      | ✅     |
| `/app`            | `<Home />`             | ✅     |
| `/dashboard`      | `<Dashboard />`        | ✅     |
| อื่น ๆ (`*`) | `<NotFound />`         | ✅     |

---

## 🚀 การนำไปขยายต่อ

* สามารถเพิ่มหน้าใหม่ได้โดยเพิ่ม `<Route path="/newpage" element={<NewPage />} />`
* ถ้าต้องการใช้ Layout แบบอื่นในบางหน้า ให้แยก `Route` ออกนอก `Layout`
