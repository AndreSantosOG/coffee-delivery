import { TagContainer } from './styles'
interface TagsProps {
  name: string
}
export type TagsTypes =
  | 'tradicional'
  | 'gelado'
  | 'tradicionalMilk'
  | 'especial'
  | 'especialMilk'
  | 'especialAlcool'
  | 'especialAlcoolGelado'
export function Tags({ name }: TagsProps) {
  return (
    <TagContainer>
      <div className="tags">
        <span>{name}</span>
      </div>
    </TagContainer>
  )
}
