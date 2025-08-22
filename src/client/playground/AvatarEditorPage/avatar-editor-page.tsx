import { useSnackbar, AvatarEditor } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

import avatarImg from 'src/client/assets/avatar.jpg'
import defaultAvatarImg from 'src/client/assets/avatar-default.png'

export const AvatarEditorPage = () => {
  const { makeRequest, isRequestPending } = useMakeRequest()
  const { displaySuccess } = useSnackbar()

  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Default" props>
        <AvatarEditor
          imgSize={300}
          avatarSrc={avatarImg}
          defaultAvatarSrc={defaultAvatarImg}
          accept=".png,.jpg,.jpeg"
          handleUpload={() =>
            makeRequest({
              url: '/fake-api/avatar-upload',
              minReqTimeMs: 3000,
            })
          }
          loading={isRequestPending}
          onSuccess={async res => {
            const body = await res.json()
            displaySuccess(body.success)
          }}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
