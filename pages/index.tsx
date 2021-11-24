import PageTransition from 'components/page-transition';
import Social from 'components/social';

function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-highlight">
            I'm Berkay Nizam.
            <br />
            Full stack, WordPress developer <br /> living in Bursa / Turkey.
          </h1>

          <p className="text-lg text-gray-700">
          I develop solution-oriented web-based applications suitable for needs with PHP language.
          </p>

          <p className="text-lg text-gray-700"> 
          Between 2015-18, I took on the front-end and back-end roles in a web agency as a full stack, and after completing many jobs, I established my own software office.
          </p>

          <p className="text-lg text-gray-700">
          With the experience I gained between 2018-21, I have been both a software developer and a manager, improving my perspective on business processes and implementing hundreds of successful web projects.  
          </p>
        </div>

    

        <div className="mt-10">
          <Social />
        </div>
      </div>
    </PageTransition>
  );
}

export default HomePage;
