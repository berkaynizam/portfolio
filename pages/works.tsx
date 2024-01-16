import PageTransition from 'components/page-transition';
import dynamic from 'next/dynamic';
import PageTitle from 'components/page-title';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Works from '../works';
import Etics from '../etics';

const Photos = dynamic(() => import('components/works'), {
    ssr: false,
});

function PhotosPage({photos, stats}) {
    return (
        <PageTransition>

            <Head>
                <title>Works - Berkay Nizam</title>
            </Head>


          <div className="c-small">

            <h3 className="text-md mb-5">Corporate & Portfolio Websites</h3>

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                      <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Industry
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                      {Works.map((work, index) => (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <a>
                                    <img src={work.image} className="h-10 w-10 object-cover"
                                         alt="Work"/></a>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    <a href={work.contentLink} target="_blank">{work.title}</a>
                                  </div>
                                  <div className="text-sm text-gray-500">{work.subtitle}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {work.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {work.clientIndustry}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href={work.contentLink} target="_blank"
                                 className="text-indigo-600 hover:text-indigo-900">
                                View Detail
                              </a>
                            </td>
                          </tr>
                      ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


            <h3 className="text-md mb-5" style="margin-top: 40px">eCommerce Websites</h3>

            <div className="flex flex-col mb-10">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                      <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Industry
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                      {Etics.map((work, index) => (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <a>
                                    <img src={work.image} className="h-10 w-10 object-cover"
                                         alt="Work"/></a>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    <a href={work.contentLink} target="_blank">{work.title}</a>
                                  </div>
                                  <div className="text-sm text-gray-500">{work.subtitle}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {work.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {work.clientIndustry}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href={work.contentLink} target="_blank"
                                 className="text-indigo-600 hover:text-indigo-900">
                                View Detail
                              </a>
                            </td>
                          </tr>
                      ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </PageTransition>
    );
}

export default PhotosPage;