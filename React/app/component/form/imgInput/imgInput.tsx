import React, {
  ChangeEventHandler, DragEventHandler, HTMLAttributes, useCallback, useState
} from 'react';
import { FileEarmarkImage } from 'react-bootstrap-icons';
import { useAlert } from '../../alert';
import theme from '../../styles/theme';
import { FormControl } from '../useFormControl';
import * as S from './style';

type ImgFormat = 'jpeg' | 'jpg' | 'png' | '*';
export type ImgInputPros = Omit<HTMLAttributes<HTMLInputElement>, 'id'> & {
  /** 가능한 이미지 포맷 리스트 */
  acceptTypes?: ImgFormat[];
  /** 가능한 최대 용량 */
  maxSize?: number;
  /** 너비값, default = 280px */
  width?: number;
  /** 높이값, default = 280px */
  height?: number;
  /** formControl */
  control: FormControl<File, HTMLInputElement>;
  /** input id 값, 반드시 유니크하게 설정해야 다른 input과의 병목 방지 */
  id: string;
};
function ImgInput({
  acceptTypes = ['*'],
  maxSize = undefined,
  width = undefined,
  height = undefined,
  control,
  id,
  ...args
}: ImgInputPros) {
  const { alert } = useAlert();
  const [src, setSrc] = useState<string>('');
  const [drag, setDrag] = useState<boolean>(false);

  const accept = useCallback(
    (format: string) => acceptTypes
      .map((type) => `${format}/${type}`)
      .join(','),
    [acceptTypes],
  );
  const prevent: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const uploadImage = useCallback((file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setSrc(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);
  const validator = useCallback((file: File, e: any) => {
    if (maxSize && file.size > maxSize) {
      control.setInvalid(true);
      if (e.target.value) e.target.value = '';
      alert('용량을 초과했습니다.');
      return false;
    }
    if (!acceptTypes.includes('*')
      && acceptTypes.includes(file.type.split('/')[1] as ImgFormat)) {
      control.setInvalid(true);
      if (e.target.value) e.target.value = '';
      alert('이미지 포맷이 일치하지 않습니다.');
      return false;
    }
    return true;
  }, [maxSize, control, acceptTypes]);

  const changeFunction: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (!e.target.files || e.target.files.length > 1) {
      alert('이미지는 하나만 업로드 가능합니다.');
      return;
    }
    const file = e.target.files[0];
    if (!validator(file, e)) return;
    uploadImage(file);
    control.onChange({ v: file });
  }, [acceptTypes, maxSize, control]);
  const dropFile: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    prevent(e);
    if (!e.dataTransfer.files || e.dataTransfer.files.length > 1) {
      alert('이미지는 하나만 업로드 가능합니다');
      return;
    }
    const file = e.dataTransfer.files[0];
    if (!validator(file, e)) return;
    if (control.ref.current) {
      // eslint-disable-next-line no-param-reassign
      control.ref.current.files = e.dataTransfer.files;
    }
    uploadImage(file);
    control.onChange({ v: file });
  }, [control]);
  const dragOver: DragEventHandler<HTMLDivElement> = (e) => {
    prevent(e);
    setDrag(true);
  };
  const dragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    prevent(e);
    setDrag(false);
  };

  return (
    <S.wrapper
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={dropFile}
      width={width}
      height={height}
    >
      <S.preview
        htmlFor={`srui-image-input_${id}`}
        drag={drag}
        src={src}
      >
        {src === '' ? (
          <S.pannel>
            <FileEarmarkImage size={48} color={theme.color.primary} />
            <S.tip>Click or Drag image file</S.tip>
          </S.pannel>
        ) : null}
      </S.preview>
      <S.input
        id={`srui-image-input_${id}`}
        type="file"
        accept={accept('image')}
        onChange={changeFunction}
        ref={control.ref}
        {...args}
      />
    </S.wrapper>
  );
}
ImgInput.defaultProps = {
  acceptTypes: ['*'],
  maxSize: undefined,
  width: undefined,
  height: undefined,
};

export default ImgInput;
