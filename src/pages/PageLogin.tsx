import { useTheme } from '@/context'

// Components
import { Switch, Card, Input, Button, Divider } from '@/components'

// Icons
import AppLogo from '@/icons/AppLogo'
import AppleIcon from '@/icons/AppleIcon'
import MetaIcon from '@/icons/MetaIcon'
import GoogleIcon from '@/icons/GoogleIcon'

const PageLogin = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Switch
        className="absolute top-4 right-4"
        defaultChecked={ theme == 'light' }
        onCheckedChange={ () => setTheme( theme == 'light' ? 'dark' : 'light' ) }
      />
      <Card className="max-w-sm w-xs p-4">
        {/* Header */}
        <div className="flex justify-center">
          <div>
            <AppLogo fontSize={ 48 } /> Lexicon
          </div>
        </div>
        {/* Content */}
        <div>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  required
                  handleChange={ ( e ) => {
                    console.log( e.target.value )
                  } }
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </div>
        <Divider variant="inset">Or</Divider>
        {/* Social Login */}
        <div className="flex-col gap-2">
          <div className="flex justify-between w-full">            
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <AppleIcon />
            </Button>
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <MetaIcon />
            </Button>
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <GoogleIcon />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PageLogin