import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { worker as mockServer } from '../../mocks/server';
import ContactUs from './ContactUs';
import { rest } from "msw";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());


describe('<ContactUS />', () => {
    it('should match snapshot', () => {
        const { container } = render(<ContactUs />);
        expect(container).toMatchSnapshot();
    });

    it('should disable button and show success modal when sending form', async () => {
        render(<ContactUs />);

        const fakeFormData = {
            name: 'simon adama',
            email: 'test@test.com',
            subject: 'want to become a member',
            message: 'Hello i want to become a member of the hub. i love the work you guys are doing in the tech world and i would love to be involved'
        }

        const form = screen.getByTestId('form');
        const nameInput = screen.getByRole('textbox', { name: /your name/i });
        const emailInput = screen.getByRole('textbox', { name: /your email/i });
        const subjectInput = screen.getByRole('textbox', { name: /subject/i });
        const messageInput = screen.getByRole('textbox', { name: /your message/i })
        const submitBtn = screen.getByRole('button', { name: /submit/i })

        user.type(nameInput, fakeFormData.name);
        user.type(emailInput, fakeFormData.email);
        user.type(subjectInput, fakeFormData.subject);
        user.type(messageInput, fakeFormData.message);

        expect(form).toHaveFormValues({
            username: fakeFormData.name,
            email: fakeFormData.email,
            subject: fakeFormData.subject,
            message: fakeFormData.message
        });

        user.click(submitBtn);

        expect(submitBtn).toBeDisabled();
        expect(submitBtn).not.toHaveTextContent('content');
        expect(await screen.findByText(/thank you!/i)).toBeInTheDocument();


        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug(await screen.findByText(/thank you!/i));
    })
    it('should disable button and show error modal when they is no internet connection', async () => {
        mockServer.use(rest.post('https://formsubmit.co/ajax/boiuattechhub@gmail.com', (req, res, ctx) => {
            return res(
                ctx.status(504),
                ctx.json({
                    message: 'error'
                })

            )
        }));

        render(<ContactUs />);

        const fakeFormData = {
            name: 'simon adama',
            email: 'test@test.com',
            subject: 'want to become a member',
            message: 'Hello i want to become a member of the hub. i love the work you guys are doing in the tech world and i would love to be involved'
        }

        const form = screen.getByTestId('form');
        const nameInput = screen.getByRole('textbox', { name: /your name/i });
        const emailInput = screen.getByRole('textbox', { name: /your email/i });
        const subjectInput = screen.getByRole('textbox', { name: /subject/i });
        const messageInput = screen.getByRole('textbox', { name: /your message/i })
        const submitBtn = screen.getByRole('button', { name: /submit/i })

        user.type(nameInput, fakeFormData.name);
        user.type(emailInput, fakeFormData.email);
        user.type(subjectInput, fakeFormData.subject);
        user.type(messageInput, fakeFormData.message);

        expect(form).toHaveFormValues({
            username: fakeFormData.name,
            email: fakeFormData.email,
            subject: fakeFormData.subject,
            message: fakeFormData.message
        });

        user.click(submitBtn);

        expect(submitBtn).toBeDisabled();
        expect(submitBtn).not.toHaveTextContent('content');
        expect(await screen.findByText(/ooops/i)).toBeInTheDocument();

    })

})