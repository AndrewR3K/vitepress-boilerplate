---
layout: page
title: Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/62485293?v=4',
        name: 'Blue',
        title: 'Owner',
        links: [
            { icon: 'github', link: 'https://github.com/kamelzarandah' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/87246847?v=4',
        name: 'Outsider',
        title: 'Project Manager',
        links: [
            { icon: 'github', link: 'https://github.com/outsider31000' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/6077794?v=4',
        name: 'Local9',
        title: 'Core Developer',
        links: [
            { icon: 'github', link: 'https://github.com/Local9' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10902965?v=4',
        name: 'Bytesizd',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/AndrewR3K' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/1690916?v=4',
        name: 'BlackPegasus',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/creativewild' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/79701428?v=4',
        name: 'Yourgen',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/YourgenAP' },
        ]
    }
]
const staff = [
    {
        avatar: 'https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2&crop=1:1',
        name: 'Hobbs',
        title: 'Moderator',
        links: []
    },
    {
        avatar: 'https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2&crop=1:1',
        name: 'NoTrHaN',
        title: 'Moderator',
        links: []
    },
    {
        avatar: 'https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2&crop=1:1',
        name: 'Marish',
        title: 'Support',
        links: []
    },
    {
        avatar: 'https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2&crop=1:1',
        name: 'Jannings',
        title: 'Support',
        links: []
    },
    {
        avatar: 'https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2&crop=1:1',
        name: 'BigSmoke',
        title: 'Support',
        links: []
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Developers</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Staff</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="medium" :members="staff" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
