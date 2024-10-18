import Card from '@/components/Card'
import './style.css'
import BgBrand from '@/components/Background/BgBrand'
import Link from 'next/link'

export default function Testimonials() {
  const comments = [
    {
      name: 'Jimmy',
      comment: `Good job, bro. I also have a small team, we're using GitHub project to manage the tasks, i think it doesn't ha ...`,
      link: 'https://dev.to/jimzzzz/comment/2f9ih',
      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1040521%2Fe6765908-5c7d-4c1c-b44f-621c29f49cfb.jpeg'
    },
    {
      name: 'Sam Kh',
      link: 'https://dev.to/sam_kh_f9b690d90dde463b9b/comment/2gci1',
      comment: 'This is awesome, I was looking for aomething like this.',
      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1491811%2Fbdad62ed-e628-4a6c-8445-bc26917c32ae.png'
    },
  ]

  const comments2 = [
    {
      hightlight: true,
      name: 'Himanshu Agarkar',
      link: 'https://dev.to/himanshu_agarkar_18d1ecbb/comment/2fokn',
      comment: `Wow, the product is amazing, we had been using Notion till now for team management, but this seems much more productive. However, I was wondering if the one who sets the project up with MongoDB will have all others' data as well, or if eac...`,
      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1629063%2F431b75ba-4bf8-43b3-8d93-f46b624f16d7.png'
    },
    {
      name: 'Shrey Vijayvargiya',
      link: 'https://dev.to/shreyvijayvargiya/comment/2fa3d',
      comment: 'Can you find a way to make it accessible at a low cost to non-devs and once figured out it will be easy to sell via the web!!, just an idea',
      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F584582%2F70be12eb-0227-48f0-b401-7a01e86cf0e2.jpeg'
    },
    {
      name: 'Jarrell',
      link: 'https://dev.to/highoctanehosting/comment/2f9hd',
      comment: `This looks promising. Any chance that you'll include Appwrite (appwrite.io) support in the future?`,
      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1409941%2F0fbf8342-56e1-4992-8547-b581806d1260.jpeg'
    },
  ]

  const comments3 = [
    {
      name: 'Awal Hossain',
      link: 'https://dev.to/awalhossain/comment/2fbee',
      comment: `Thank you for open-sourcing this incredible project. Your dedication and generosity are truly inspiring. Keep up the fantastic work 🚀`,

      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F772371%2F6099250f-f236-4955-ac99-72b00ed0c542.png'
    },
    {
      name: 'Earendil',
      link: 'https://dev.to/earendildev/comment/2f8p4',
      comment: 'Awesome work. Love the clean look... Any plans to make a Docker version?',

      avatar: 'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F424174%2F3a696ff2-e171-4b7c-a91d-6d5bce4313ab.jpeg'
    },
  ]

  return <section id="testimonials" className='pt-[200px] relative'>
    <div className="flex flex-col items-center">
      <h6 className="hl2">testimonials</h6>
      <h2 className="h2 mt-[17px]">Here’s what developers<br />
        say about Namviek
      </h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Discover what developers think of us on Dev.to. Find reviews, discussions, and see how our product can benefit you.</p>

      <div className="mt-16 sm:mt-28 w-[95%] sm:w-[1200px] flex flex-col sm:flex-row gap-5">
        <div className='grid grid-cols-1 gap-5'>
          {comments.map((cm, cindex) => {
            const { comment, avatar, name, link } = cm
            const nickname = name.split(/\s+/).join('_').toLowerCase()
            return <Card key={cindex}
              type='darkblur'
              className='p-6 group'
              border='normal'
              flexSize={true}>
              <p className='text-zinc-300'>{comment}
              </p>
              <div className='flex items-center gap-3 mt-3'>
                <img className='w-12 h-12 rounded-full' src={avatar} />
                <div>
                  <div className='font-semibold text-base'>{name}</div>
                  <small className='second-color text-base'>@{nickname}</small>
                </div>
              </div>
            </Card>
          })}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {comments2.map((cm, cindex) => {
            const { comment, avatar, name, hightlight, link } = cm
            const nickname = name.split(/\s+/).join('_').toLowerCase()
            return <Card key={cindex}
              flexSize={true}
              border='normal'
              type='darkblur'
              className={`p-6 group ${hightlight ? 'col-span-1 sm:col-span-2' : ''}`}
            >

              <p className='text-zinc-300'>{comment}</p>
              <div className='flex items-center gap-3 mt-3'>
                <img className='w-12 h-12 rounded-full' src={avatar} />
                <div>
                  <div className='font-semibold text-base'>{name}</div>
                  <small className='second-color text-base'>@{nickname}</small>
                </div>
              </div>
            </Card>
          })}
        </div>

        <div className='grid grid-cols-1 gap-5'>
          {comments3.map((cm, cindex) => {
            const { comment, avatar, name, link } = cm
            const nickname = name.split(/\s+/).join('_').toLowerCase()
            return <Card key={cindex}
              className='p-6 group'
              border='normal'
              type='darkblur'
              flexSize={true}>
              <p className='text-zinc-300'>{comment} </p>
              <div className='flex items-center gap-3 mt-3'>
                <img className='w-12 h-12 rounded-full' src={avatar} />
                <div>
                  <div className='font-semibold text-base'>{name}</div>
                  <small className='second-color text-base'>@{nickname}</small>
                </div>
              </div>
            </Card>
          })}
        </div>

      </div>
    </div>

    <div className="absolute top-[350px] sm:top-[550px] left-1/2 -translate-x-1/2 -z-10">
      <BgBrand />
    </div>

  </section>
}
