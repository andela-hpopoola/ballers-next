import React, { useState } from 'react';
import BackendPage from 'components/layout/BackendPage';
import { Card } from 'react-bootstrap';
import Toast, { useToast } from 'components/utils/Toast';
import Axios from 'axios';
import Input from 'components/forms/Input';
import {
  setInitialValues,
  DisplayFormikState,
} from 'components/forms/form-helper';
import Button from 'components/forms/Button';
import { Formik, Form, useFormikContext } from 'formik';
import { createSchema } from 'components/forms/schemas/schema-helpers';
import { BASE_API_URL, BLOG_STATUS, BLOG_TAGS } from 'utils/constants';
import { getTokenFromStore } from 'utils/localStorage';
import Select from 'components/forms/Select';
import { useGetQuery } from 'hooks/useQuery';
import { API_ENDPOINT } from 'utils/URL';
import { ContentLoader } from 'components/utils/LoadingItems';
import { BlogIcon } from 'components/utils/Icons';
import { setQueryCache } from 'hooks/useQuery';
import { refreshQuery } from 'hooks/useQuery';
import {
  arrayToOptions,
  getAutoCompleteAsArray,
  getError,
  statusIsSuccessful,
  valuesToOptions,
} from 'utils/helpers';
import { blogPostSchema } from '@/components/forms/schemas/blogSchema';
import Editor from '@/components/forms/Editor';
import Upload from 'components/forms/UploadFormik';
import AutoComplete from '@/components/forms/AutoComplete';

const BlogForm = ({ id = null }) => {
  const [toast, setToast] = useToast();
  return (
    <BackendPage>
      <div className="container-fluid">
        {id ? (
          <EditBlogForm id={id} toast={toast} setToast={setToast} />
        ) : (
          <NewBlogForm toast={toast} setToast={setToast} />
        )}
      </div>
    </BackendPage>
  );
};

export const NewBlogForm = ({ blog = null, toast, setToast }) => {
  const [categoriesQuery, categories] = useGetQuery({
    key: 'categories',
    name: ['categories'],
    setToast,
    endpoint: API_ENDPOINT.getAllCategories(),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        ...setInitialValues(blogPostSchema, {
          status: BLOG_STATUS.DRAFT,
          ...blog,
        }),
      }}
      onSubmit={(values, actions) => {
        const payload = {
          ...values,
          tags: getAutoCompleteAsArray(values.tags),
        };
        Axios({
          method: blog?._id ? 'put' : 'post',
          url: blog?._id
            ? `${BASE_API_URL}/blog/${blog?._id}`
            : `${BASE_API_URL}/blog`,
          data: payload,
          headers: { Authorization: getTokenFromStore() },
        })
          .then(function (response) {
            const { status, data } = response;
            if (statusIsSuccessful(status)) {
              setQueryCache(['blogPost', data.blogPost._id], {
                blogPost: data.blogPost,
              });
              setToast({
                type: 'success',
                message: `Your blog post has been successfully ${
                  blog?._id ? 'updated' : 'added'
                }`,
              });

              actions.setSubmitting(false);
              actions.resetForm();
              refreshQuery('blog');
            }
          })
          .catch(function (error) {
            setToast({
              message: getError(error),
            });
            actions.setSubmitting(false);
          });
      }}
      validationSchema={createSchema(blogPostSchema)}
    >
      {({ isSubmitting, handleSubmit, ...props }) => (
        <Form>
          <Toast {...toast} />
          <BlogInfoForm categories={categories || []} {...props} />
          <Button
            className="mt-4 btn-secondary"
            loading={isSubmitting}
            onClick={handleSubmit}
          >
            {blog?._id ? 'Update' : 'Add New'} Blog Post
          </Button>
          <DisplayFormikState {...props} showAll />
        </Form>
      )}
    </Formik>
  );
};

const EditBlogForm = ({ id, toast, setToast }) => {
  const [blogQuery, blog] = useGetQuery({
    key: 'blogPost',
    name: ['blogPost', id],
    setToast,
    endpoint: API_ENDPOINT.getOneBlog(id),
    refresh: true,
  });

  return (
    <ContentLoader
      hasContent={!!blog}
      Icon={<BlogIcon />}
      query={blogQuery}
      name="Blog"
      toast={toast}
    >
      <NewBlogForm blog={blog} toast={toast} setToast={setToast} />
    </ContentLoader>
  );
};

const BlogInfoForm = ({ categories }) => {
  const [isInput, setIsInput] = useState(categories.length === 0);

  const handleToggle = () => {
    setIsInput(!isInput);
  };

  return (
    <Card className="card-container">
      <section className="row">
        <div className="px-4 col-md-10">
          <h5 className="mb-4">Blog Information</h5>
          <Input label="Title" name="title" placeholder="Blog Title" />
          <Editor name="content" placeholder="Blog Content" label="Content" />
          <div className="form-row">
            <Select
              label="Status"
              name="status"
              options={arrayToOptions(Object.values(BLOG_STATUS))}
              formGroupClassName="col-md-6"
            />
            {isInput ? (
              <Input
                label="Category"
                formGroupClassName="col-md-6"
                name="category"
                placeholder="Category"
                labelLink={{ onClick: handleToggle, text: 'Select Existing' }}
              />
            ) : (
              <Select
                formGroupClassName="col-md-6"
                label="Category"
                name="category"
                options={arrayToOptions(categories)}
                labelLink={{
                  onClick: handleToggle,
                  text: 'Enter a New Category',
                }}
              />
            )}
          </div>
          <Upload
            label="Upload blog image"
            changeText="Update Picture"
            imgOptions={{
              className: 'mb-3 img-xxl',
            }}
            name="mainImage"
            optional
            uploadText={`Upload Blog Image`}
            folder={'blog'}
          />

          <AutoComplete
            name="tags"
            label="Tags"
            suggestions={valuesToOptions(BLOG_TAGS)}
          />
        </div>
      </section>
    </Card>
  );
};

export default BlogForm;
