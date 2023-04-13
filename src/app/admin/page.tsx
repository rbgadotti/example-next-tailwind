import Checkbox from "@/components/form/Checkbox";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import InputGroup from "@/components/form/InputGroup";
import PageHeader from "@/components/form/PageHeader";
import Select from "@/components/form/Select";

export default function Admin() {
  return (
    <div className="container mx-auto px-6 py-6">
      <PageHeader title="Admin" subtitle="Manage your account settings and set e-mail preferences." />
      <Form>
        <InputGroup
          name={"notification"}
          label={"Notification from us"}
          description={"Receive the latest news, updates and industry tutorials from us."}
        >
          <Input name={"username"} label={"Email"} />
          <Input name={"username"} label={"Senha"} description="Compiled client and server successfully in 251 ms" />
          <Select name={"teste"} label={"Select example"} options={[
            { label: "teste", value: "teste" },
            { label: "teste", value: "teste" },
            { label: "teste", value: "teste" },
            { label: "teste", value: "teste" },
          ]} />
        </InputGroup>
        <InputGroup
          name={"notification"}
          label={"Notification from us"}
          description={"Receive the latest news, updates and industry tutorials from us."}
        >
          <Checkbox
            name={"news_updates"}
            label={"News and updates"}
            description="News about products and features updates."
          />
          <Checkbox
            name={"tips_tutorials"}
            label={"Tips and tutorials"}
            description="Tips on getting more out of Untitled."
          />
        </InputGroup>
        <InputGroup
          name={"notification"}
          label={"Notification from us"}
          description={"Receive the latest news, updates and industry tutorials from us."}
        >
          <Checkbox
            name={"news_updates"}
            label={"News and updates"}
            description="News about products and features updates."
          />
          <Checkbox
            name={"tips_tutorials"}
            label={"Tips and tutorials"}
            description="Tips on getting more out of Untitled."
          />
        </InputGroup>
        <InputGroup
          name={"notification"}
          label={"Notification from us"}
          description={"Receive the latest news, updates and industry tutorials from us."}
        >
          <Checkbox
            name={"news_updates"}
            label={"News and updates"}
            description="News about products and features updates."
          />
          <Checkbox
            name={"tips_tutorials"}
            label={"Tips and tutorials"}
            description="Tips on getting more out of Untitled."
          />
        </InputGroup>
        <InputGroup
          name={"notification"}
          label={"Notification from us"}
          description={"Receive the latest news, updates and industry tutorials from us."}
        >
          <Checkbox
            name={"news_updates"}
            label={"News and updates"}
            description="News about products and features updates."
          />
          <Checkbox
            name={"tips_tutorials"}
            label={"Tips and tutorials"}
            description="Tips on getting more out of Untitled."
          />
        </InputGroup>
      </Form>
    </div>
  )
}