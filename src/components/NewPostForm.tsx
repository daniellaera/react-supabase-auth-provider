import { forwardRef } from 'react';
import { Form, ButtonToolbar, Button, Input } from 'rsuite';

const Textarea = forwardRef((props, ref: any) => <Input {...props} as="textarea" ref={ref} />);

function NewPostForm({ onCancel, onSubmit, submitting }: any) {
  return (
    /* <form className={classes.form} onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          required
          minLength={10}
          rows={5}
        ></textarea>
      </fieldset>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </button>
      <button disabled={submitting}>
        {submitting ? 'Submitting...' : 'Create Post'}
      </button>
    </form> */ 
    <Form >
    <Form.Group controlId="title">
      <Form.ControlLabel>title</Form.ControlLabel>
      <Form.Control name="title" />
      <Form.HelpText>title is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="content">
      <Form.ControlLabel>content</Form.ControlLabel>
      <Form.Control name="content" />
      <Form.HelpText>content is required</Form.HelpText>
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button type='submit' appearance="primary" disabled={submitting}>{submitting ? 'Submitting...' : 'Create Post'}</Button>
        <Button appearance="default" onClick={onCancel} disabled={submitting}>Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
    )
  
}

export default NewPostForm;
