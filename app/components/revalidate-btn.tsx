import { useFormStatus } from 'react-dom'

export function RevalidateButton({
  btnMsg,
  type,
}: {
  btnMsg: string
  type: 'fetch' | 'revalidate'
}) {
  const formStatus = useFormStatus()

  return (
    <button
      className={`revalidate-from-button ${type} ${formStatus.pending && 'disabled'}`}
      type='submit'
      disabled={formStatus.pending}
      aria-disabled={formStatus.pending}
    >
      {btnMsg}
    </button>
  )
}
