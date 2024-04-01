import Image from "next/image";
import  Courses from "@/lib/courses";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-4">
      <div className="flex items-center flex-wrap w-full gap-3 mt-5 justify-center">
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          HTML
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          CSS
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Java
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Python
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          JavaScript
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Php
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Mysql
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Django
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Laravel
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Kotlin
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          React
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Nextjs
        </span>
        <span className="p-1  md:py-2 md:px-4 bg-slate-300 hover:bg-slate-400 rounded-xl">
          Swift
        </span>
      </div>
      <div className="flex h-full w-full">
        <div className="hidden md:flex md:flex-col w-[25%] h-full border-r-2">
          <h2 className="font-bold border-b">Category</h2>
          <ul className="flex flex-col gap-3 font-sans text-lg mt-6">
            {Courses ? (
              Courses.map((data) => (
                <Link
                  href={"/"}
                  className="bg-slate-100 p-2 hover:bg-slate-200"
                  key={data.id}
                >
                  {data.title}
                </Link>
              ))
            ) : (
              <>Loading...</>
            )}
          </ul>
        </div>

        <div className="mt-4 ml-8">
          <h1 className="text-xl font-bold border-b-4 md:text-3xl">
            Gradenet Student IT Topics
          </h1>
          <div className="">
            {Courses &&
              Courses.map((cou) => (
                <Link key={cou.id} href={"/"}>
                  {cou.course &&
                    cou.course.map((data, i) => (
                      <p className="flex flex-col" key={cou.id}>
                        {data.content &&
                          data.content.map((dat, i) => (
                            <span key={cou.id}>{dat.name}</span>
                          ))}
                      </p>
                    ))}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
