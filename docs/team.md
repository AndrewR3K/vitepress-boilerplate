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
        avatar: 'https://avatars.githubusercontent.com/u/10902965?v=4',
        name: 'Bytesizd',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/AndrewR3K' },
        ]
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
</VPTeamPage>
