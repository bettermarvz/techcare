import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Sample Links
const LinkItems = [
    {
        name: 'Overview',
        href: '/overview',
        icon: '/icon/home_FILL0_wght300_GRAD0_opsz24.svg',
    },
    {
        name: 'Patients',
        href: '/patients',
        icon: '/icon/group_FILL0_wght300_GRAD0_opsz24.svg',
        active: true
    },
    {
        name: 'Appointments',
        href: '/appointments',
        icon: 'icon/calendar_today_FILL0_wght300_GRAD0_opsz24.svg',
    },
    {
        name: 'Message',
        href: '/messages',
        icon: 'icon/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg',
    },
    {
        name: 'Transactions',
        href: '/transactions',
        icon: 'icon/credit_card_FILL0_wght300_GRAD0_opsz24.svg',
    }
]

const NavLinkItem = ({name, href, icon, active}: {name: string, href: string, icon: string, active?: boolean}) => (
    <><a href={href} className={`flex items-center gap-3 px-4 py-3 rounded-full hover:bg-[#F6F7F8] ${active ? 'bg-[#01F0D0]' : ''}`}>
        <Image alt={`${name} Icon`} src={icon} width={20} height={20}/>
        <span className='text-[#072635] font-bold text-sm'>{name}</span>
    </a></>)

const NavLink = () => (
    <nav className='flex gap-4'>
        {LinkItems.map((item) => (
            <NavLinkItem key={item.name} name={item.name} href={item.href} icon={item.icon} active={item.active}/>
        ))}
    </nav>
)

const LogoContainer = () => <div>
    <Image alt="Company Logo" src='/TestLogo.svg' height={48} width={211}/>
</div>

const ProfileContainer = ({
  name,
  position,
}: {
  name: string;
  position: string;
}) => (
  <div className="flex gap-3 ">
    <div className="flex gap-2">
      <div className="flex flex-col text-sm">
        <p className="font-bold text-[#072635]">{name}</p>
        <p className="text-[#707070]">{position}</p>
      </div>
    </div>
    <div className="w-[1px] bg-[#EDEDED]"></div>
    <div className="flex gap-3 items-center">
      <Link href="#">
        <Image
          alt="Settings Icon"
          src="/icon/settings_FILL0_wght300_GRAD0_opsz24.svg"
          height={24}
          width={24}
        />
      </Link>
      <Link href="#">
        <Image
          alt="More Actions Icon"
          src="/icon/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
          height={18}
          width={4}
        />
      </Link>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <section className='h-[72px] rounded-full bg-white flex justify-between items-center px-8'>
        <LogoContainer/>
        <NavLink/>
        <ProfileContainer name='Dr. Jose Simmons' position='General Practitioner'/>
    </section>
  )
}

export default Navbar