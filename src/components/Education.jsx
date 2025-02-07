import React from 'react'

function Education() {
  return (
    <>
      <section className="my-20">
        <h1 className="text-center font-semibold md:text-4xl text-2xl">
          My Education and Soft Skills
        </h1>
        <br />
        <main className="space-y-2 md:flex  md:justify-between">
          <div className="left space-y-3">
            <h2 className="my-2 text-xl">
              {" "}
              My Education From School To University
            </h2>
            <p>
              1. Complete BA In English Literature From Daffodil International
              University
            </p>
            <p>
              2. Now I am a student of Gazipur Central Law Collage, Gazipur.
            </p>
          </div>
          <div className="right space-y-3 mt-10 md:mt-0">
            <h1 className="my-2 text-xl ">
              No One Is Perfect But I Always Learning New things..
            </h1>
            <p>1. English Speaking</p>
            <p>2. Hindi Speaking</p>
            <p>3. Urdhu Speaking</p>
            <p>4. Collaboration</p>
            <p> 5. Familiar: Re-remote and office culture </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default Education
