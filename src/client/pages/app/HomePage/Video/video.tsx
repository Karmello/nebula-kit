import { Box, Spacer, Text } from 'lib/components'

export const Video = () => {
  return (
    <Box maxInlineSize="700px" margin={{ base: '0 auto', lg: '0px' }}>
      <Spacer blockSize="48px" />
      <Box
        tag="iframe"
        tagAttrs={{
          src: 'https://www.youtube-nocookie.com/embed/WBTCswhSz6g?list=PLucbUGAh96p7hH87OY-C50iiCA7LAv_Ci',
          title: 'Responsive UI, driven by props',
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowFullScreen: true,
        }}
        aspectRatio="16 / 9"
      />
      <Spacer blockSize="8px" />
      <Text typography="small" intent="secondary" color="gray" italic>
        Video hosted on YouTube. Playback may set cookies.
      </Text>
    </Box>
  )
}
