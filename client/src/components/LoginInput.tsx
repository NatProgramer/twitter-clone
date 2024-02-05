import './LoginInput.css'

export default function LoginInput ({ content, placeholder, isRequired }: { content: string, placeholder: string, isRequired: boolean }) {
  return (
    <div>
      <label htmlFor={content}>{content}</label>
      <input
        id={content}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  )
}
